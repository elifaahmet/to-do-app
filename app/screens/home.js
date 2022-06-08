import React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';

import { Label, SafeAreaView } from '../elements';
import { Header, TaskInput, TaskBox } from '../components';
import { add_task, remove_task, edit_task } from '../redux/tasksSlice';
import { sign_out } from '../redux/userSlice';

const StyledView = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    background-color: #E5E5E5;
`;

const StyledElementView = styled.View`
    margin-bottom: 24px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
`;

export const Home = ({ navigation }) => {

    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.value);
    const user = useSelector((state) => state.user.value)

    const onAddTask = () => {
      dispatch(add_task(task));
      setTask('');
    }

    const onDeleteTask = (d) => {
      dispatch(remove_task(d));
    }

    const onEditTask = (t, e) => {
      dispatch(edit_task({task: t, edited: e}));
    }

    const logOut = () => {
      const auth = getAuth();
      signOut(auth).then(() => {
          dispatch(sign_out({
              username: '',
              firstName: '',
              lastName: ''
          }));
      });
    }

    return (
      <SafeAreaView>
        <StyledView>
          <StyledElementView>
            <Header username={user.username} onLogOut={logOut} />
          </StyledElementView>
          <StyledElementView>
            <TaskInput
              placeholder="Type a task"
              onChangeText={setTask} 
              value={task}
              addButtonEnabled={!!task.trim().length}
              onAddTask={onAddTask}
              onSubmitEditing={onAddTask}
            />
          </StyledElementView>
          <StyledElementView>
                <Label>Tasks</Label>
          </StyledElementView>
          {tasks.map((t, i) => {
            return (
              <StyledElementView key={i}>
                <TaskBox task={t} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
              </StyledElementView>
            )})
          }
        </StyledView>
      </SafeAreaView>
    );
}
