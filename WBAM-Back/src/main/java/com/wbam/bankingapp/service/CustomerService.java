package com.wbam.bankingapp.service;

import com.wbam.bankingapp.exception.CustomerNotFoundException;
import com.wbam.bankingapp.model.Account;
import com.wbam.bankingapp.model.Customer;
import com.wbam.bankingapp.service.AccountService;
import com.wbam.bankingapp.repo.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.security.auth.login.AccountNotFoundException;
import java.util.List;
import java.util.Random;

@Service
public class CustomerService {
    private final CustomerRepo customerRepo;

    @Autowired
    public CustomerService(CustomerRepo customerRepo){
        this.customerRepo=customerRepo;
    }

    public Customer addCustomer(Customer customer){
        return this.customerRepo.save(customer);
    }
    public List<Customer> findAllCustomers(){
        return customerRepo.findAll();
    }
    public Customer updateCustomer(Customer customer){
        return customerRepo.save(customer);
    }
    public Customer findCustomerbyCustomerId(Integer customerId){
        try{
            return customerRepo.findCustomerByCustomerId(customerId).orElseThrow(() -> new CustomerNotFoundException("Customer with customer_id "+customerId+" was not found"));
        }catch (CustomerNotFoundException e){
            throw new RuntimeException(e);
        }
    }

    public void deleteCustomer(Integer customerId){
        customerRepo.deleteCustomerByCustomerId(customerId);
    }

}
