import dayjs from 'dayjs/esm/index';
import isoWeek from 'dayjs/esm/plugin/isoWeek';
import advancedFormat from './plugin/advancedFormat';
import customParseFormat from './plugin/customParseFormat';

dayjs.extend(isoWeek);
dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);

export default dayjs;
