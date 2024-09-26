import { Injectable } from '@nestjs/common';
import axios from 'axios';
// import puppeteer from 'puppeteer';

@Injectable()
export class SpeedTestService {
  // Основной метод для тестирования скорости

  async testSpeedDev(urls: string[]): Promise<any[]> {
    const results = [];

    for (const url of urls) {
      const result = await this.testUrlSpeed(url);
      results.push(result);
    }

    return results;
  }

  async testSpeedPreprod(urls: string[]): Promise<any[]> {
    const results = [];

    for (const url of urls) {
      const result = await this.testUrlSpeed(url);
      results.push(result);
    }

    return results;
  }
  async testSpeed(urls: string[]): Promise<any[]> {
    const results = [];

    for (const url of urls) {
      const result = await this.testUrlSpeed(url);
      results.push(result);
    }

    return results;
  }

  // Метод для измерения времени загрузки одной страницы
  async testUrlSpeed(url: string): Promise<{ url: string, time: number, status: number}> {
    const start = Date.now(); // Запоминаем время начала
    try {
      const response = await axios.get(url); // Выполняем запрос
      const time = Date.now() - start; // Вычисляем разницу во времени
      return { url, time: time / 1000, status: response.status}; // Возвращаем время в секундах и статус ответа
    } catch (error) {
      return { url, time: 0, status: error.response ? error.response.status : 500}; // В случае ошибки
    }
  }

  // async testUrlSpeed(url: string): Promise<{ url: string, time: number, domContentLoaded: number, loadEvent: number, status: number }> {
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();
  //
  //   const start = Date.now();
  //   try {
  //     // Перехватываем навигацию на страницу
  //     const response = await page.goto(url, {
  //       waitUntil: 'networkidle2',
  //       timeout: 10000
  //     });
  //
  //     // Получаем время загрузки DOM
  //     const domContentLoadedTime = await page.evaluate(() => {
  //       return performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
  //     });
  //
  //     // Получаем время полной загрузки страницы (включая скрипты, стили и прочие ресурсы)
  //     const loadEventTime = await page.evaluate(() => {
  //       return performance.timing.loadEventEnd - performance.timing.navigationStart;
  //     });
  //
  //     // Вычисляем общее время
  //     const totalTime = Date.now() - start;
  //
  //     // Закрываем браузер
  //     await browser.close();
  //
  //     return {
  //       url,
  //       time: totalTime / 1000, // Полное время загрузки в секундах
  //       domContentLoaded: domContentLoadedTime / 1000, // Время до DOMContentLoaded в секундах
  //       loadEvent: loadEventTime / 1000, // Время до полной загрузки в секундах
  //       status: response.status() // Статус ответа
  //     };
  //   } catch (error) {
  //     console.log(error);
  //     // В случае ошибки закрываем браузер и возвращаем статус ошибки
  //     await browser.close();
  //     return {
  //       url,
  //       time: 0,
  //       domContentLoaded: 0,
  //       loadEvent: 0,
  //       status: 500 // Или другой код ошибки, если известен
  //     };
  //   }
  // }
}