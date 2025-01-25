package com.wbam.bankingapp.model;

public class LoginCredentials {
    private String userId;
    private String password;
    public LoginCredentials(){}
    public LoginCredentials(String userId, String password){
        this.userId=userId;
        this.password=password;
    }
    //Getters
    public String getUserId() {return userId;}
    public String getPassword() {return password;}

    //Setters
    public void setUserId(String userId) {this.userId = userId;}
    public void setPassword(String password) {this.password = password;}

    @Override
    public String toString() {
        return "LoginCredentials{"+
                "userId='"+userId+"'"+
                ", password='"+password+"'"+
                "}";
    }
}
