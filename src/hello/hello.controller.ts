import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/')
export class HelloController {
  @Get()
  index(@Req() request: Request, @Res() response: Response): void {
    response.status(200).json({
      message: 'HomePage',
    });
  }
}
