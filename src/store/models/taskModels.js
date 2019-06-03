import { getUser } from "../../utils/storage";

const statues = {
  1: "Open",
  2: "In Progress",
  3: "Submitted",
  4: "Completed"
};

export class TaskModel {
  constructor(task) {
    task = task || {};
    const statuses = task.statuses || [];
    const keywords = task.keywords || [];

    this.id = task.id || null;
    this.title = task.title || null;
    this.description = task.description || null;
    this.due_date = task.due_date || new Date();
    this.max_plagiarism = task.max_plagiarism || 10;
    this.max_mistakes = task.max_mistakes || 10;
    this.min_word = task.min_word || 0;
    this.payment_type = task.payment_type || 1;
    this.payment_value = task.payment_value || null;
    this.user_id = task.user_id || getUser().id;
    this.assignee = task.assignee || {};
    this.manager_id = task.manager_id || null;
    this.created_at = task.created_at || null;
    this.updated_at = task.updated_at || null;
    this.statuses = statuses.map(s => new TaskStatus(s));
    this.keywords = keywords.map(k => new TaskKeyword(k));
    this.keywords.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    this.current_status = this.statuses[0] ? this.statuses[0].status : 1;
    this.task_submissions = [];
  }

  get status_label() {
    return statues[this.current_status];
  }
}

export class TaskStatus {
  constructor(status) {
    status = status || {};
    this.id = status.id || null;
    this.status = status.status || null;
    this.user_id = status.user_id || null;
    this.task_id = status.task_id || null;
    this.created_at = status.created_at || null;
    this.updated_at = status.updated_at || null;
  }
}

export class TaskKeyword {
  constructor(keyword) {
    keyword = keyword || {};
    this.id = keyword.id || null;
    this.name = keyword.name || null;
    this.density = keyword.density || null;
    this.task_id = keyword.task_id || null;
    this.created_at = keyword.created_at || null;
    this.updated_at = keyword.updated_at || null;
  }
}

export class TaskSubmission {
  constructor(submission) {
    submission = submission || {};
    this.id = submission.id;
    this.submission = submission.submission || "";
    this.writer = submission.writer || {};
    this.created_at = submission.created_at;
    this.updated_at = submission.updated_at;
  }
}
