package com.wbam.bankingapp.model;

import jakarta.persistence.*;

import java.io.Serializable;
@Entity
public class Transaction implements Serializable {
    @Id
    @Column(nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer transactionId;

    //customer ID
    private int accountId;

    private Integer amount;
    private String date;

    //status: 0-posted 1-pending -1-denied
    private Integer status;

    //transactions details: "Capital One Mobil Pmt", "Online transfer to {account}"
    private String details;

    //category: Transfers, Personal Expenses, etc..
    private String category;

    //service: "ACH Credit PY{account number}", "ACH WEB {long string}"
    private String service;

    private String accountNumber;
    private Integer balanceAtTransaction;

    public Transaction(){}
    public Transaction(Integer transactionId, Integer accountID, Integer amount, String date, Integer status, String details,
                       String category, String service, String accountNumber, Integer balanceAtTransaction){
        this.transactionId=transactionId;
        this.accountId=accountID;
        this.amount=amount;
        this.date=date;
        this.status=status;
        this.details=details;
        this.category=category;
        this.service=service;
        this.accountNumber=accountNumber;
        this.balanceAtTransaction=balanceAtTransaction;
    }
    public Transaction(Integer accountID, Integer amount, String date, Integer status, String details,
                       String category, String service, String accountNumber, Integer balanceAtTransaction){
        //no transactionId, this should be auto set
        this.accountId=accountID;
        this.amount=amount;
        this.date=date;
        this.status=status;
        this.details=details;
        this.category=category;
        this.service=service;
        this.accountNumber=accountNumber;
        this.balanceAtTransaction=balanceAtTransaction;
    }
    //Getters
    public Integer getTransactionId() {return transactionId;}
    public String getAccountNumber() {return accountNumber;}
    public int getCustomerId() {return accountId;}
    public Integer getAmount() {return amount;}
    public Integer getBalanceAtTransaction() {return balanceAtTransaction;}
    public Integer getStatus() {return status;}
    public String getCategory() {return category;}
    public String getDate() {return date;}
    public String getDetails() {return details;}
    public String getService() {return service;}

    //Setters
    public void setAccountNumber(String accountNumber) {this.accountNumber = accountNumber;}
    public void setAmount(Integer amount) {this.amount = amount;}
    public void setCustomerId(int accountId) {this.accountId = accountId;}
    public void setBalanceAtTransaction(Integer balanceAtTransaction) {this.balanceAtTransaction = balanceAtTransaction;}
    public void setCategory(String category) {this.category = category;}
    public void setDate(String date) {this.date = date;}
    public void setDetails(String details) {this.details = details;}
    public void setService(String service) {this.service = service;}
    public void setStatus(Integer status) {this.status = status;}
    public void setTransactionId(Integer transactionId) {this.transactionId = transactionId;}

    @Override
    public String toString() {
        return "Transaction{"+
        ", transactionId="+transactionId+
        ", accountId="+accountId+
        ", amount="+amount+
        ", date='"+date+"'"+
        ", status="+status+
        ", details='"+details+"'"+
        ", category='"+category+"'"+
        ", service='"+service+"'"+
        ", accountNumber='"+accountNumber+"'"+
        ", balanceAtTransaction="+balanceAtTransaction+
        "}";
    }
}