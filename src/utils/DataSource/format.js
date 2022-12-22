export function formatDSResult(result) {
    if (!result) {
        return [];
    } else if (typeof result === 'string') {
        let list = [];
        try {
            list = formatDSResult(JSON.parse(result));
        } catch (err) {
            console.error(err);
        }
        return list;
    } else if (Array.isArray(result)) {
        return result;
    } else if (result && Array.isArray(result.list)) {
        return result.list;
    } else if (result && Array.isArray(result.content)) {
        return result.content;
    } else {
        return [];
    }
}
