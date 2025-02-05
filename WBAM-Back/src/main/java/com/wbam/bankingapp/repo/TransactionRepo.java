package com.wbam.bankingapp.repo;

import com.wbam.bankingapp.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TransactionRepo extends JpaRepository<Transaction,String> {

    Optional<List<Transaction>> findByAccountNumber(String accountNumber);
    Optional<Transaction> findByTransactionId(Integer transactionId);
    Optional<List<Transaction>> findByAccountId(Integer customerId);
}
