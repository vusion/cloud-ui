/**
 * 用于生成带地区 code 的数据结构给 u-region-select 使用，基于 vant 的数据
 */
const fs = require('fs')
const path = require('path');
const { areaList } = require('@vant/area-data');

function transformAreaList(areaList) {
    const result = [];
    for (const [provinceCode, provinceName] of Object.entries(areaList.province_list)) {
        const provinceObj = {
            value: provinceName,
            code: provinceCode,
            children: []
        };
        for (const [cityCode, cityName] of Object.entries(areaList.city_list)) {
            if (cityCode.startsWith(provinceCode.slice(0, 2))) {
                const cityObj = {
                    value: cityName,
                    code: cityCode,
                    children: []
                };
                for (const [countyCode, countyName] of Object.entries(areaList.county_list)) {
                    if (countyCode.startsWith(cityCode.slice(0, 4))) {
                        cityObj.children.push({
                            value: countyName,
                            code: countyCode
                        });
                    }
                }
                provinceObj.children.push(cityObj);
            }
        }
        result.push(provinceObj);
    }
    return result;
}

const regionConfig = transformAreaList(areaList)
const jsonPath = path.resolve(__dirname, '../src/components/u-region-select.vue/region.json')
fs.writeFileSync(jsonPath, JSON.stringify(regionConfig))
