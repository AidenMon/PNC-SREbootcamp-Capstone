package com.wbam.bankingapp.repo;

import com.wbam.bankingapp.model.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserAuthRepo extends JpaRepository<UserAuth, String> {

    Optional<UserAuth> findUserAuthByUserId(String userId);
}
