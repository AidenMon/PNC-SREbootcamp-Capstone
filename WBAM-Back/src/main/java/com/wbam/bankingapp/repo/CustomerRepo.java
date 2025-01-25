package com.wbam.bankingapp.repo;

import com.wbam.bankingapp.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepo extends JpaRepository<Customer, String> {
    Optional<Customer> findCustomerByCustomerId(Integer customerId);

    void deleteCustomerByCustomerId(Integer customerId);
}
