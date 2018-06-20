import Loadable from 'react-loadable';
import Loading from './loading';

export default Loadmang = func => Loadable({
    loading: Loading,
    loader: func,
    timeout: 10000 // 10 seconds
})