package com.wbam.bankingapp;
import com.wbam.bankingapp.model.Transaction;
import com.wbam.bankingapp.service.AccountService;
import com.wbam.bankingapp.service.TransactionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@Resource
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/transaction")
public class TransactionResource {
    private final TransactionService transactionService;
    private final AccountService accountService;

    public TransactionResource(
            TransactionService transactionService,
            AccountService accountService) {
        this.transactionService = transactionService;
        this.accountService = accountService;
    }

    @GetMapping("/{accountNumber}/all")
    public ResponseEntity<List<Transaction>> getAllTransactionsByAccountNumber(@PathVariable("accountNumber") String accountNumber) {
        List<Transaction> transactions = transactionService.findTransactionsByAccountNumber(accountNumber);
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    @GetMapping("/all/{customerId}")
    public ResponseEntity<List<Transaction>> getAllTransactionsByAccountNumber(@PathVariable("customerId") Integer customerId) {
        List<Transaction> transactions = transactionService.findTransactionsByAccountId(customerId);
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    @GetMapping("/{accountNumber}/{transactionId}")
    public ResponseEntity<Transaction> getTransactionInAccount(
            @PathVariable("accountNumber") String accountNumber, @PathVariable("transactionId") Integer transactionId) {
        Transaction transaction = transactionService.findTransactionById(transactionId);
        if (!transaction.getAccountNumber().equals(accountNumber))
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        return new ResponseEntity<>(transaction, HttpStatus.OK);
    }

    @PostMapping("/demo/create")
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction) {
        //Get customerId (aka accountId)
        Integer customerId = accountService.findAccountByAccountNumber(transaction.getAccountNumber()).getCustomerId();
        transaction.setCustomerId(customerId);
        Transaction createdTransaction=transactionService.addTransaction(transaction);
        return new ResponseEntity<>(createdTransaction,HttpStatus.OK);
    }
}