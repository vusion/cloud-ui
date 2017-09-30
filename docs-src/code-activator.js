const reg = /```(.+?)\r?\n([\s\S]+?)\r?\n```/g;
const getTagContent = (content, tag) => {
    const reg = new RegExp(`<${tag}>([\\s\\S]+)<\\/${tag}>`);
    const m = content.match(reg);
    return m ? m[1] : '';
};

exports.activate = (markdown) => {
    const result = {};

    let index = 0;
    result.script = [];
    result.markdown = markdown.replace(reg, (m, lang, content) => {
        lang = lang.trim();
        // Remove whitespace between tags
        content = content.trim().replace(/>\s+</g, '><');

        const id = 'u-example-' + index;
        index++;

        if (lang === 'vue')
            return `<div class="u-example">${content}</div>\n\n` + m;
        // const template = getTagContent(content, 'template');
        // const script = getTagContent(content, 'script').replace(/^\s*export\s+default\s+/, '').replace(/;\s*$/, '');
        // const style = getTagContent(content, 'style');

        // result.script.push(`new Vue(${script}).$mount('#${id}');`);
        // return `<div id="${id}" class="u-example">${template}</div>\n\n` + m;
        else if (lang === 'html') {
            // result.script.push(`new Vue().$mount('#${id}');`);
            return `<div class="u-example">${content}</div>\n\n` + m;
        } else
            return m;
    });
    result.script = result.script.join('\n');

    return result;
};
