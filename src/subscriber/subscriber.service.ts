import { Injectable } from '@nestjs/common';
import { CreateSubscriberDto } from './subscriber.dto';
import { SubscriberRepository } from './subscriber.repository';

@Injectable()
export class SubscriberService {
  constructor(private readonly subscriberRepository: SubscriberRepository) {}

  async addSubscriber(createSubscriberDto: CreateSubscriberDto) {
    return await this.subscriberRepository.create(createSubscriberDto);
  }

  async getAllSubscriber() {
    return this.subscriberRepository.getAll();
  }
}
