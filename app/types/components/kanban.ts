export type KanbanCard = {
  id: string,
  title: string,
  asigneeAvatar: string[],
  priority: string,
  tags: string[],
  deadline: Date,
  subtaskscount: number,
}