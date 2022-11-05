import { InjectModel } from '@nestjs/mongoose';
import { Subscriber } from './subscriber.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ObjectID } from 'mongodb';

@Injectable()
export class SubscriberRepository {
  constructor(
    @InjectModel('Subscriber')
    private readonly subscriber: Model<Subscriber>,
  ) {}

  async create(doc): Promise<any> {
    doc._id = new ObjectID();
    return await new this.subscriber(doc).save();
  }

  async getAll() {
    return this.subscriber.find();
  }
}
