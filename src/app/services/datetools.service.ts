import { Injectable } from '@angular/core';

@Injectable()
export class DatetoolsService {
  now = new Date(); // 当前日期
  nowDayOfWeek = this.now.getDay(); // 今天本周的第几天
  nowDay = this.now.getDate(); // 当前日
  nowMonth = this.now.getMonth(); // 当前月
  nowYear = this.now.getFullYear(); // 当前年

  /**
   * 格式化日期
   *
   * @param {any} date
   * @returns 格式化后的日期
   *
   * @memberof DatetoolsService
   */
  formatDate(date) {
    const myyear = date.getFullYear();
    let mymonth = date.getMonth() + 1;
    let myweekday = date.getDate();

    if (mymonth < 10) {
      mymonth = '0' + mymonth;
    }
    if (myweekday < 10) {
      myweekday = '0' + myweekday;
    }
    return (myyear + '/' + mymonth + '/' + myweekday);
  }

  /**
   * 获得本周的开始日期
   *
   * @returns 本周开始日期
   *
   * @memberof DatetoolsService
   */
  getWeekStartDate() {
    const weekStartDate = new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek + 1);
    return this.formatDate(weekStartDate);
  }

  /**
   * 获得本周的结束日期
   *
   * @returns 本周结束日期
   *
   * @memberof DatetoolsService
   */
  getWeekEndDate() {
    const weekEndDate = new Date(this.nowYear, this.nowMonth, this.nowDay + (7 - this.nowDayOfWeek));
    return this.formatDate(weekEndDate);
  }

  /**
   * 获得本月的开始日期
   *
   * @returns 本月开始日期
   *
   * @memberof DatetoolsService
   */
  getMonthStartDate() {
    const monthStartDate = new Date(this.nowYear, this.nowMonth, 1);
    return this.formatDate(monthStartDate);
  }

  /**
   * 获得本月的结束日期
   *
   * @returns 本月结束日期
   *
   * @memberof DatetoolsService
   */
  getMonthEndDate() {
    const monthEndDate = new Date(this.nowYear, this.nowMonth, this.getMonthDays(this.nowMonth));
    return this.formatDate(monthEndDate);
  }

  /**
   * 获得本季度的开始日期
   *
   * @returns 本季度开始日期
   *
   * @memberof DatetoolsService
   */
  getQuarterStartDate() {
    const quarterStartDate = new Date(this.nowYear, this.getQuarterStartMonth(), 1);
    return this.formatDate(quarterStartDate);
  }

  /**
   * 获得本季度的结束日期
   *
   * @returns 本季度结束日期
   *
   * @memberof DatetoolsService
   */
  getQuarterEndDate() {
    const quarterEndMonth = this.getQuarterStartMonth() + 2;
    const quarterStartDate = new Date(this.nowYear, quarterEndMonth, this.getMonthDays(quarterEndMonth));
    return this.formatDate(quarterStartDate);
  }

  /**
   * 获得本季度的开始月份
   *
   * @returns 本季度开始月份
   *
   * @memberof DatetoolsService
   */
  getQuarterStartMonth() {
    let quarterStartMonth = 0;
    if (this.nowMonth < 3) {
      quarterStartMonth = 0;
    }
    if (2 < this.nowMonth && this.nowMonth < 6) {
      quarterStartMonth = 3;
    }
    if (5 < this.nowMonth && this.nowMonth < 9) {
      quarterStartMonth = 6;
    }
    if (this.nowMonth > 8) {
      quarterStartMonth = 9;
    }
    return quarterStartMonth;
  }

  /**
   * 获得某月的天数
   *
   * @param {any} myMonth
   * @returns 天数
   *
   * @memberof DatetoolsService
   */
  getMonthDays(myMonth) {
    const monthStartDate: any = new Date(this.nowYear, myMonth, 1);
    const monthEndDate: any = new Date(this.nowYear, myMonth + 1, 1);
    const days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
  }

  constructor() { }

}
