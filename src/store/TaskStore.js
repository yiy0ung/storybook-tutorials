import { observable, action } from "mobx";
import { autobind } from 'core-decorators';
import { sleep, dummyTask } from './DummyRepository';

@autobind
class TaskStore {
  @observable idx = 0;
  @observable taskList = [];

  @action getIdx () {
    this.idx += 1;

    return this.idx;
  }

  @action async getTaskList () {
    let maxIdx = 0;
    sleep(2000);
    let data = dummyTask;
    console.log(dummyTask);

    data.map(e => {
      if (e.idx >= maxIdx)
        maxIdx = e.idx;
    });

    this.idx = maxIdx;
    this.taskList = data;

    return data;
  }

  @action async createTask (task) {
    this.taskList = this.taskList.concat([task]);
  }

  @action async archiveTask (idx) {
    console.log(idx);
    console.log('archive');
    this.taskList = this.taskList.map(task => {
      if (task.idx === idx) {
        task.archive = !task.archive;
      }
      return task;
    });
  }

  @action async pinnedTask (idx) {
    console.log('pinned');
    this.taskList = this.taskList.map(task => {
      if (task.idx === idx) {
        task.pinned = !task.pinned;
      }
      return task;
    });
  }

  @action async removeTask (idx) {
    console.log('remove');
    this.taskList = this.taskList.filter(task => task.idx !== idx);
  }
}

export default TaskStore;