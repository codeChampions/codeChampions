package com.codechampions.services;

import com.codechampions.entities.Stat;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jack on 1/1/16.
 */
public interface StatRepository extends CrudRepository<Stat, Integer> {
}
