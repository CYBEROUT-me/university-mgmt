export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'student' | 'teacher' | 'admin' | 'rector';
  department_id?: string;
}

export interface Grade {
  id: string;
  course_title: string;
  score: number;
  graded_at: string;
}

export interface ScheduleItem {
  id: string;
  course_title: string;
  weekday: string;
  start_time: string;
  end_time: string;
  room: string;
  teacher: string;
}
