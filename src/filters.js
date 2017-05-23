import moment from 'moment';
export default {
    dateStr(value){
        return moment(value).format('YYYY-MM-DD')
    },
    max_len(value,max_len,ellipsis=true){
        let slice_str = value.slice(0,max_len);
        return ellipsis? slice_str+'...': slice_str;
    }
}