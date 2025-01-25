package com.wbam.bankingapp.service;

import com.wbam.bankingapp.exception.CustomerNotFoundException;
import com.wbam.bankingapp.exception.UserAuthNotFoundException;
import com.wbam.bankingapp.model.Customer;
import com.wbam.bankingapp.model.UserAuth;
import com.wbam.bankingapp.repo.UserAuthRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserAuthService {
    private final UserAuthRepo userAuthRepo;

    @Autowired
    public UserAuthService(UserAuthRepo userAuthRepo){
        this.userAuthRepo=userAuthRepo;
    }

    public UserAuth addAuth(UserAuth auth){
        return userAuthRepo.save(auth);
    }
    public List<UserAuth> findAllAuthTable(){
        return userAuthRepo.findAll();
    }
    public UserAuth updateAuth(UserAuth auth){
        return userAuthRepo.save(auth);
    }
    public UserAuth findAuthById(String userId){
        try{
            return userAuthRepo.findUserAuthByUserId(userId).orElseThrow(() -> new UserAuthNotFoundException("UserAuth with userId "+userId+" was not found"));
        }
        catch (UserAuthNotFoundException e){
            throw new RuntimeException(e);
        }
    }

    public Integer confirmLogin(String userId, String password){
        UserAuth auth = this.findAuthById(userId);
        if(!password.equals(auth.getPassword()))
            return -1;
        return auth.getCustomerId();
    }
}
