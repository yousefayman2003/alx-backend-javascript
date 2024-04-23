export default function guardrail(mathFunction) {
  const queue = [];
  let num;

  try {
    num = mathFunction();
  } catch (error) {
    num = error.toString();
  }

  queue.push(num);
  queue.push('Guardrail was processed');

  return queue;
}
