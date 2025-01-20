package com.wbam.bankingapp.service;

import com.wbam.bankingapp.model.Account;
import com.wbam.bankingapp.repo.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.security.auth.login.AccountNotFoundException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Service
public class AccountService {
    private final AccountRepo accountRepo;

    @Autowired
    public AccountService(AccountRepo accountRepo){this.accountRepo=accountRepo;}

    public Account addAccount(Account account){
        account.setAccountNumber(""+(new Random().nextInt(99999999)+11111111) );
        account.setRoutingNumber(""+(new Random().nextInt(99999999)+11111111) );
        account.setCreatedDate(
                LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))
        );
        return this.accountRepo.save(account);
    }

    public List<Account> findAllAccounts(){
        return accountRepo.findAll();
    }

    public Account updateAccount(Account account){
        return accountRepo.save(account);
    }

    public List<Account> findAccountByCustomerId(Integer customerId) {
        try {
            return accountRepo.findAccountByCustomerId(customerId).orElseThrow(() -> new AccountNotFoundException("Account with customerId "+customerId+" was not found"));
        } catch (AccountNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
    public Account findAccountByAccountNumber(String accountNumber) {
        try {
            return accountRepo.findAccountByAccountNumber(accountNumber).orElseThrow(() -> new AccountNotFoundException("Account with accountNumber "+accountNumber+" was not found"));
        } catch (AccountNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    public void deleteAccount(String accountNumber) {
        accountRepo.deleteAccountByAccountNumber(accountNumber);
    }
}
