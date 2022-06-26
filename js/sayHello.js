import { format } from "date-fns";
/**
 * Says hello.
 * @param  {String} name a name
 * @return {String}      a greeting for `name`
 */
export function sayHelloTo(name) {
  var date = new Date();
  var dateFormat = format(date, "yyyy.MM.dd HH:mm:ss"); // 2021.10.11 10:30:25

  const toSay = `Hello, ${name}! Today is ${dateFormat}`;

  return toSay;
}
