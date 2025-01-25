package com.wbam.bankingapp.model;

import jakarta.persistence.*;

import java.io.Serializable;
@Entity
public class UserAuth implements Serializable {
    @Id
    @Column(nullable = false, updatable = false)
    private String userId;
    private Integer customerId;
    private String password;
    public UserAuth(){}
    public UserAuth(String userId, Integer customerId, String password){
        this.userId=userId;
        this.customerId=customerId;
        this.password=password;
    }
    //Getters
    public String getUserId() {return userId;}
    public Integer getCustomerId() {return customerId;}
    public String getPassword() {return password;}

    //Setters
    public void setUserId(String userId) {this.userId = userId;}
    public void setCustomerId(Integer customerId) {this.customerId = customerId;}
    public void setPassword(String password) {this.password = password;}

    @Override
    public String toString() {
        return "UserAuth{"+
                "userId='"+userId+"'"+
                ", customerId="+customerId+
                ", password='"+password+"'"+
                "}";
    }
}