package com.wbam.bankingapp;

import com.wbam.bankingapp.model.Account;
import com.wbam.bankingapp.model.Customer;
//import jakarta.annotation.Resource;
import com.wbam.bankingapp.service.AccountService;
import com.wbam.bankingapp.service.CustomerService;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@Resource
@RestController
@RequestMapping("/api/customer")
public class CustomerResource {
    private final CustomerService customerService;
    private final AccountService accountService;

    public CustomerResource(CustomerService customerService, AccountService accountService){
        this.customerService=customerService;
        this.accountService=accountService;
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
    @PostMapping("/create")
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer){
        Customer customerCreate=customerService.addCustomer(customer);
        return new ResponseEntity<>(customerCreate, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer){
        Customer customerUpdate=customerService.updateCustomer(customer);
        return new ResponseEntity<>(customerUpdate, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{customerId}")
    public ResponseEntity<?> deleteCustomer(@PathVariable("customerId") Integer customerId){
        customerService.deleteCustomer(customerId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
