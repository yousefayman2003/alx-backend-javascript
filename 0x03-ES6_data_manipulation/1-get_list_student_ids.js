export default function getListStudentIds(arg) {
  const ids = [];
  if (!(arg instanceof Array)) return ids;

  arg.forEach((obj) => ids.push(obj.id));

  return ids;
}
