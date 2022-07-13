import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/forms/task';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
    const defaultTask1 = new Task('Example1', 'Description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'Description3', true, LEVELS.BLOCKING);
    
    
    const [task, setTask] = useState([defaultTask1, defaultTask2, defaultTask3])

    useEffect(() => {
        console.log('Task state has been modified')
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [task]);
        
        // function completeTask(task){
        //     console.log('Complete this Task:', task);
        //     const index = tasks.indexOf(task);
        //     const tempTasks = [...tasks];
        //     tempTasks[index].completed = !tempTasks[index].completed;
        //     // We update the state of the component with the new list of tasks and it will update the
        //     // Iteration of the tasks in order to show the task updated
        //     setTasks(tempTasks);
        // }

        // function deleteTask(task){
        //     console.log('Detele this Task:', task);
        //     const index = tasks.indexOf(task);
        //     const tempTasks = [...tasks];
        //     tempTasks.splice(index,1);
        //     setTasks(tempTasks);
        // }

        // function addTask(task){
        //     console.log('Detele this Task:', task);
        //     const tempTasks = [...tasks];
        //     tempTasks.push(task);
        //     setTasks(tempTasks);
        // }

        // const Table = () => {
        //     return (
        //         <table>
        //             <thead>
        //                 <tr>
        //                     <th scope='col'>Title</th>
        //                     <th scope='col'>Description</th>
        //                     <th scope='col'>Priority</th>
        //                     <th scope='col'>Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 { tasks.map((task, index) => {
        //                     return (
        //                             <TaskComponent 
        //                                 key={index} 
        //                                 task={task}
        //                                 complete={completeTask}
        //                                 remove = {deleteTask}
        //                             >
        //                             </TaskComponent>
        //                         )
        //                     }
        //                 )}
        //             </tbody>
        //         </table>
        //     )
        // }

        // let tasksTable;

        // if(tasks.length > 0){
        //     tasksTable = <Table></Table>
        // }else{
        //     tasksTable = (
        //     <div>
        //         <h3> There are no tasks to show</h3>
        //         <h4>Please, create one</h4>
        //     </div>
        //     )
        // }

        // const loadingStyle = {
        //     color: 'grey',
        //     fontSize: '30px',
        //     fontWeight: 'bold'
        // }
    return (
        <div>
            <div className='col-12' >
                <div className='card' style={{ color: 'black' }} >
                    <div className='card-header p-3'>
                        <h5 style={{ color: 'black' }} >
                            Your Tasks:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }} >
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {task.map((task, i) => {
                                    return(
                                        <TaskComponent key={i} task={task} remove={true} complete={true} ></TaskComponent>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar una lista */}

        </div>
    );
};

export default TaskListComponent;
