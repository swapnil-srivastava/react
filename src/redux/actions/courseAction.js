import * as types from "../actions/actionTypes";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course: course };
}
