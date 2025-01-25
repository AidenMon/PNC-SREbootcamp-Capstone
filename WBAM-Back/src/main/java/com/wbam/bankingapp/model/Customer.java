package com.wbam.bankingapp.model;

import jakarta.persistence.*;

import java.io.Serializable;
@Entity
public class Customer implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Integer customerId;
    private String firstName;
    private String lastName;
    private String middleName;
    private String email;
    private String phone;
    private Integer addressId;

    public Customer(){}
    public Customer(Integer customerId, String firstName, String lastName, String middleName,
                    String email, String phone, Integer addressId){
        this.customerId=customerId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.middleName=middleName;
        this.email=email;
        this.phone=phone;
        this.addressId=addressId;
    }
    //Getters
    public Integer getCustomerId() {return customerId;}
    public Integer getAddressId() {return addressId;}
    public String getEmail() {return email;}
    public String getFirstName() {return firstName;}
    public String getLastName() {return lastName;}
    public String getMiddleName() {return middleName;}
    public String getPhone() {return phone;}

    //Setters
    public void setCustomerId(Integer customerId) {this.customerId = customerId;}
    public void setAddressId(Integer addressId) {this.addressId = addressId;}
    public void setEmail(String email) {this.email = email;}
    public void setFirstName(String firstName) {this.firstName = firstName;}
    public void setLastName(String lastName) {this.lastName = lastName;}
    public void setMiddleName(String middleName) {this.middleName = middleName;}
    public void setPhone(String phone) {this.phone = phone;}

    @Override
    public String toString() {
        return "Customer{"+
                "customerId="+customerId+
                ", firstName='"+firstName+"'"+
                ", lastName='"+lastName+"'"+
                ", middleName='"+middleName+"'"+
                ", email='"+email+"'"+
                ", phone='"+phone+"'"+
                ", addressId="+addressId+
                "}";
    }
}
