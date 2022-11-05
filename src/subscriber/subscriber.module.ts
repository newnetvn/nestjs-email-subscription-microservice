import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscriberSchema } from './subscriber.model';
import { SubscriberService } from './subscriber.service';
import { SubscriberRepository } from './subscriber.repository';
import { SubscriberController } from './subscriber.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Subscriber',
        schema: SubscriberSchema,
      },
    ]),
  ],
  controllers: [SubscriberController],
  providers: [SubscriberService, SubscriberRepository],
})
export class SubscriberModule {}
