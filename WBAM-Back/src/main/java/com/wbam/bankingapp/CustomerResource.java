package com.wbam.bankingapp;

import com.wbam.bankingapp.model.Account;
import com.wbam.bankingapp.model.Customer;
//import jakarta.annotation.Resource;
import com.wbam.bankingapp.model.Transaction;
import com.wbam.bankingapp.repo.TransactionRepo;
import com.wbam.bankingapp.service.AccountService;
import com.wbam.bankingapp.service.CustomerService;
import com.wbam.bankingapp.service.TransactionService;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.*;

//@Resource
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/customer")
public class CustomerResource {
    private final CustomerService customerService;
    private final AccountService accountService;
    private final TransactionService transactionService;

    private static class TransactionPost {
        private String accountTo;
        private String accountFrom;
        private Integer amount;
        public String getAccountFrom() {return accountFrom;}
        public String getAccountTo() {return accountTo;}
        public Integer getAmount() {return amount;}
    }

    public CustomerResource(CustomerService customerService, AccountService accountService, TransactionService transactionService){
        this.customerService=customerService;
        this.accountService=accountService;
        this.transactionService=transactionService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Customer>> getAllCustomers(){
        List<Customer> customers=customerService.findAllCustomers();
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }
    //find Customer
    @GetMapping("/find/{customerId}")
    public ResponseEntity<Customer> getCustomerByCustomerId(@PathVariable("customerId") Integer customerId){
        Customer customer=customerService.findCustomerbyCustomerId(customerId);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }
    //find Customer's Specific account
    //-----Needs to return Error if not in account
    //---------Currently returns nothing?
    @GetMapping("/find/{customerId}/{accountNumber}")
    public ResponseEntity<Account> getAccountByCustomerId(@PathVariable("customerId") Integer customerId, @PathVariable("accountNumber") String accountNumber){
        Account account=accountService.findAccountByAccountNumber(accountNumber);
        if(!account.getCustomerId().equals(customerId))
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        return new ResponseEntity<>(account, HttpStatus.OK);
    }
    //find all customer's accounts
    @GetMapping("/find/{customerId}/accounts")
    public ResponseEntity<List<Account>> getCustomerAccounts(@PathVariable("customerId") Integer customerId){
        List<Account> accounts=accountService.findAccountByCustomerId(customerId);
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }
    //Transfer funds between customer owned accounts
    @PostMapping("/transfer")
    public ResponseEntity<List<Transaction>> transferBetweenAccounts(@RequestBody TransactionPost transactionPost){

        Account accountFrom = accountService.findAccountByAccountNumber(transactionPost.getAccountFrom());
        Account accountTo = accountService.findAccountByAccountNumber(transactionPost.getAccountTo());
        Integer customerId = accountFrom.getCustomerId();

        //Get Date
        Date currentDate = new Date();
        String formattedDate = new SimpleDateFormat("yyyy-MM-dd").format(currentDate);
        Integer status=0;
        Integer amount=transactionPost.amount*-1;
        Integer balance = accountFrom.getBalance().intValue();

        //Update Balances
        accountFrom.setBalance(accountFrom.getBalance()-transactionPost.getAmount());
        accountTo.setBalance(accountTo.getBalance()+transactionPost.getAmount());

        //create transactions
        Transaction transactionFrom = new Transaction(
                customerId, amount, formattedDate,
                status, "Online Transfer To "+accountTo.getAccountNumber(),
                "Transfer", "ZBL Transfer"+accountFrom.getAccountNumber(), accountFrom.getAccountNumber(), balance
        );
        amount = amount*-1;
        balance = accountTo.getBalance().intValue();
        Transaction transactionTo = new Transaction(
                customerId, amount, formattedDate,
                status, "Online Transfer From "+accountFrom.getAccountNumber(),
                "Transfer", "ZBL Transfer"+accountTo.getAccountNumber(), accountTo.getAccountNumber(),balance
        );

        //save to DB
        Transaction createdTransactionFrom=transactionService.addTransaction(transactionFrom);
        Transaction createdTransactionTo=transactionService.addTransaction(transactionTo);


        List<Transaction> rtn = new ArrayList<Transaction>();
        rtn.add(createdTransactionFrom);
        rtn.add(createdTransactionTo);
        return new ResponseEntity<>(rtn, HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer){
        Customer customerUpdate=customerService.updateCustomer(customer);
        return new ResponseEntity<>(customerUpdate, HttpStatus.OK);
    }

    //Admin-ish
    @PostMapping("/create")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer){
        Customer customerCreate=customerService.addCustomer(customer);
        return new ResponseEntity<>(customerCreate, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{customerId}")
    public ResponseEntity<?> deleteCustomer(@PathVariable("customerId") Integer customerId){
        customerService.deleteCustomer(customerId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
