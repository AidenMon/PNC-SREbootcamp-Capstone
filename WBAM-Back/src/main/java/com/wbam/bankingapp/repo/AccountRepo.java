package com.wbam.bankingapp.repo;

import com.wbam.bankingapp.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AccountRepo extends JpaRepository<Account, String> {
    Optional<List<Account>> findAccountByCustomerId(Integer customerId);

    void deleteAccountByAccountNumber(String accountNumber);

    Optional<Account> findAccountByAccountNumber(String accountNumber);
}
