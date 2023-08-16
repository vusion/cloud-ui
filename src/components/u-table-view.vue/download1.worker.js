importScripts("https://cdn.sheetjs.com/xlsx-0.17.2/package/dist/xlsx.full.min.js");
    function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    
    // 创建一个可读流
    function createReadableStream(dataSource) {
        const encoder = new TextEncoder();
        let pendingData = '';
        let pendingSize = 0;
        let flag = true
        return new ReadableStream({
            pull(controller) {
                console.log(pendingData, pendingSize)
    
                return new Promise((resolve) => {
                    const t = () => {
                        const result = dataSource;
                        if (result.done) {
                            if (pendingData) {
                                controller.enqueue(encoder.encode(pendingData));
                            }
                            controller.enqueue(encoder.encode(']'))
                            controller.close();
                            resolve();
                        } else {
                            // excel 
                            let newData = pendingData + result.value;
                            if(flag) {
                                newData = '[' + newData.substring(1);
                                flag = false
                            }
                            const newSize = encoder.encode(newData).length;
    
                            if (newSize > 2048000) {
                                controller.enqueue(encoder.encode(pendingData));
                                pendingData = result.value;
                                pendingSize = encoder.encode(pendingData).length;
                                resolve();
                            } else {
                                pendingData = newData;
                                pendingSize = newSize;
                                requestAnimationFrame(t)
                            }
                        }
                    }
                    requestAnimationFrame(t)
                })
                
                
            }
        });
    }
    
    // 创建一个可写流
    
    
    const download = (dataSource) => {
        Promise.resolve(createReadableStream(dataSource))
            .then((stream) => new Response(stream))
            .then((response) => response.json())
            .then(json => {
                let t = Date.now()
                var ws = XLSX.utils.json_to_sheet(json, header);
                postMessage(['json2sheet', Date.now() - t])
                var wb = XLSX.utils.book_new();
                console.time();
                XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
                console.timeEnd();
                console.time("writeFile");
                t = Date.now()
                let str = XLSX.write(wb, { bookType:'xlsx', bookSST: false, type:'binary' });
    
                const blob =  new Blob([s2ab(str)], 
                    {
                        type:"application/octet-stream"
                    });
                console.timeEnd("writeFile");
                postMessage(['writefile', Date.now() - t])
                const url = URL.createObjectURL(blob);
                postMessage(['downloadurl', url])
            }) 
    }
    self.onmessage = (e) => {
            console.log(e)
            const type = e.data[0];
            switch(type) {
                case 'start':
                    let dataSource = e.data[1];
                    let header = e.data[2];
                    let filename = e.data[3];
                    download(dataSource, header);
                break
            }
        }
  
