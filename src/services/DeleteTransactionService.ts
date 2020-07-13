import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transcation from '../models/Transaction';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transcationRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transcationRepository.findOne(id);

    if (!transaction) {
      throw new AppError('This transaction does not exist');
    }

    await transcationRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
