package com.wbam.bankingapp.model;

import jakarta.persistence.*;

import java.io.Serializable;
@Entity
public class Account implements Serializable {
    @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    //@Column(nullable = false, updatable = false)
    private String accountNumber;
    private String accountType;
    private String routingNumber;
    private Float balance;
    private String createdDate;
    private String branchId;
    private String internationalSwiftCode;
    private boolean overDraft;
    private Integer lowBal;
    private Integer customerId;

    public Account(){}

    public Account(String accountNumber, String accountType, String routingNumber,
                   Float balance, String createdDate, String branchId, String internationalSwiftCode,
            boolean overDraft, Integer lowBal, Integer customerIdd){
        this.accountNumber=accountNumber;
        this.accountType=accountType;
        this.routingNumber=routingNumber;
        this.balance=balance;
        this.createdDate=createdDate;
        this.branchId=branchId;
        this.internationalSwiftCode=internationalSwiftCode;
        this.overDraft=overDraft;
        this.lowBal=lowBal;
        this.customerId=customerIdd;
    }
    //Getters
    public String getAccountNumber() {return this.accountNumber;}
    public boolean isOverDraft() {return overDraft;}
    public Float getBalance() {return balance;}
    public Integer getCustomerId() {return customerId;}
    public String getAccountType() {return accountType;}
    public Integer getLowBal() {return lowBal;}
    public String getBranchId() {return branchId;}
    public String getCreatedDate() {return createdDate;}
    public String getInternationalSwiftCode() {return internationalSwiftCode;}
    public String getRoutingNumber() {return routingNumber;}
    //Setters
    public void setAccountNumber(String accountNumber) {this.accountNumber = accountNumber;}
    public void setAccountType(String accountType) {this.accountType = accountType;}
    public void setBalance(Float balance) {this.balance = balance;}
    public void setBranchId(String branchId) {this.branchId = branchId;}
    public void setCreatedDate(String createdDate) {this.createdDate = createdDate;}
    public void setCustomerId(Integer customerId) {this.customerId = customerId;}
    public void setInternationalSwiftCode(String internationalSwiftCode) {this.internationalSwiftCode = internationalSwiftCode;}
    public void setLowBal(Integer lowBal) {this.lowBal = lowBal;}
    public void setOverDraft(boolean overDraft) {this.overDraft = overDraft;}
    public void setRoutingNumber(String routingNumber) {this.routingNumber = routingNumber;}

    @Override
    public String toString() {
        return "Account{"+
        "accountNumber='"+accountNumber + "'"+
        ", accountType='"+accountType + "'"+
        ", routingNumber='"+routingNumber + "'"+
        ", balance="+balance +
        ", createdDate='"+createdDate + "'"+
        ", branchId='"+branchId + "'"+
        ", internationalSwiftCode='"+internationalSwiftCode + "'"+
        ", overDraft="+overDraft +
        ", lowBal="+lowBal +
        ", customerId="+customerId+
        "}";
    }
}



