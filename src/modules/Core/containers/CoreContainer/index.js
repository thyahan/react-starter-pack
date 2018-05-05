import { connect } from 'react-redux';
import Core from '../../components/Core';
import { updateCoreValue } from '../../redux/action';
const mapStateToProps = state => ({
    core: state.core,
});

const mapDispatchToProps = dispatch => ({
    updateCoreValue: value => dispatch(updateCoreValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Core);