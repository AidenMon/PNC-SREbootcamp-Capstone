package com.wbam.bankingapp;

import com.wbam.bankingapp.model.Account;
import com.wbam.bankingapp.service.AccountService;
//import jakarta.annotation.Resource;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@Resource
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/account")
public class AccountResource {
    private final AccountService accountService;

    public AccountResource(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Account>> getAllAccounts(){
        List<Account> accounts=accountService.findAllAccounts();
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }
    @GetMapping("/find/{customerId}")
    public ResponseEntity<List<Account>> getAccountByCustomerID(@PathVariable("customerId") Integer customerId){
        List<Account> accounts=accountService.findAccountByCustomerId(customerId);
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }
    @GetMapping("/findAcc/{accountNumber}")
    public ResponseEntity<Account> getAccountByAccountNumber(@PathVariable("accountNumber") String accountNumber){
        Account account=accountService.findAccountByAccountNumber(accountNumber);
        return new ResponseEntity<>(account, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<Account> createAccount(@RequestBody Account account){
        Account accountCreate = accountService.addAccount(account);
        return new ResponseEntity<>(accountCreate, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Account> updateAccount(@RequestBody Account account){
        Account accountUpdate = accountService.updateAccount(account);
        return new ResponseEntity<>(accountUpdate, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{accountNumber}")
    public ResponseEntity<?> deleteAccount(@PathVariable("accountNumber") String accountNumber){
        System.out.println("----------Logging Delete:---------");
        System.out.println("Passed in data:");
        System.out.println(accountNumber.getClass()+" - Type");
        System.out.println(accountNumber);
        System.out.println(accountService.findAccountByAccountNumber(accountNumber));
        System.out.println("-----------------");
        accountService.deleteAccount(accountNumber);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
