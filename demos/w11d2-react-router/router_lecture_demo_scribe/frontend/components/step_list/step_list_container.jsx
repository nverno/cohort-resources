import { connect } from 'react-redux';
import StepList from './step_list';
// Actions
import { stepsByTodoId } from '../../reducers/selectors';
import { createStep } from '../../actions/step_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, { todo_id }) => {
  // `ownProps` isn't available here because this container isn't rendered by 
  // a route.  that's why we use `withRouter`
  debugger
  return {
    steps: stepsByTodoId(state, todo_id),
    todo_id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createStep: (...args) => dispatch(createStep(...args))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList));