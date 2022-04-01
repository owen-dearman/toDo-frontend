export interface todosInterface {
  id: number;
  title: string;
  details: string;
  createdDate: string;
  dueDate: string;
  completed: boolean;
}

export interface todosInterfaceNoID {
  title: string;
  details: string;
  createdDate: string;
  dueDate: string;
  completed: boolean;
}
