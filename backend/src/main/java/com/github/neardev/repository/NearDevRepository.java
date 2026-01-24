package com.github.neardev.repository;

import com.github.neardev.entity.NearDevEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NearDevRepository extends JpaRepository<NearDevEntity, Long> {
}
