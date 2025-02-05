package com.wbam.bankingapp;

//import jakarta.annotation.Resource;
import com.wbam.bankingapp.model.Customer;
import com.wbam.bankingapp.model.LoginCredentials;
import com.wbam.bankingapp.model.UserAuth;
import com.wbam.bankingapp.service.CustomerService;
import com.wbam.bankingapp.service.UserAuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@Resource
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/login")
public class UserAuthResource {
    private final UserAuthService authService;
    private final CustomerService customerService;

    public UserAuthResource(UserAuthService authService, CustomerService customerService) {
        this.authService = authService;
        this.customerService = customerService;
    }

    //Bad structure, but I know it works
    /*
    @PostMapping("/{userId}/{password}")
    public ResponseEntity<Customer> getAuthByUserId(@PathVariable("userId") String userId, @PathVariable("password") String password){
        Customer loginCustomer=customerService.findCustomerbyCustomerId(authService.confirmLogin(userId,password));
        return new ResponseEntity<>(loginCustomer,HttpStatus.OK);
    }//*/
    //Right Structure...does it work?
    @PostMapping("")
    public ResponseEntity<Customer> logInCustomer(@RequestBody LoginCredentials credentials){
        Customer loginCustomer=customerService.findCustomerbyCustomerId(authService.confirmLogin(credentials.getUserId(), credentials.getPassword()));
        return new ResponseEntity<>(loginCustomer,HttpStatus.OK);
    }

    @GetMapping("/demo/all")
    public ResponseEntity<List<UserAuth>> getAllUserAuth(){
        List<UserAuth> authList=authService.findAllAuthTable();
        return new ResponseEntity<>(authList, HttpStatus.OK);
    }

    @PostMapping("/demo/create")
    public ResponseEntity<UserAuth> createAuth(@RequestBody UserAuth userAuth){
        UserAuth createdAuth=authService.addAuth(userAuth);
        return new ResponseEntity<>(createdAuth, HttpStatus.CREATED);
    }
}
