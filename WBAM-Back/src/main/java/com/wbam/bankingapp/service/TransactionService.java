package com.wbam.bankingapp.service;

import com.wbam.bankingapp.exception.TransactionNotFoundException;
import com.wbam.bankingapp.model.Transaction;
import com.wbam.bankingapp.repo.TransactionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionService {
    private final TransactionRepo transactionRepo;

    @Autowired
    public TransactionService(TransactionRepo transactionRepo){
        this.transactionRepo=transactionRepo;
    }
    public Transaction addTransaction(Transaction transaction){
        return transactionRepo.save(transaction);
    }
    public List<Transaction> findAllTransactions(){
        return transactionRepo.findAll();
    }
    public List<Transaction> findTransactionsByAccountNumber(String accountNumber){
        try {
            return transactionRepo.findByAccountNumber(accountNumber).orElseThrow(() -> new TransactionNotFoundException("No transactions under account number "+accountNumber));
        }
        catch (TransactionNotFoundException e){
            throw new RuntimeException(e);
        }
    }
    public Transaction findTransactionById(Integer transactionId){
        try {
            return transactionRepo.findByTransactionId(transactionId).orElseThrow(() -> new TransactionNotFoundException("No transaction with ID "+transactionId));
        }
        catch (TransactionNotFoundException e){
            throw new RuntimeException(e);
        }
    }

    public List<Transaction> findTransactionsByAccountId(Integer customerId) {
        try {
            return transactionRepo.findByAccountId(customerId).orElseThrow(() -> new TransactionNotFoundException("No transactions for customer with ID "+customerId));
        }
        catch (TransactionNotFoundException e){
            throw new RuntimeException(e);
        }
    }
}
