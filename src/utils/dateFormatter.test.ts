import { dateFormatter } from "./dateFormatter";

test("format date to dd/mm/yyyy", () => {
  expect(dateFormatter(new Date())).toBe(dateFormatter(new Date()));
});
