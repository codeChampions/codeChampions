package com.codechampions.services;

import com.codechampions.entities.Message;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Jack on 12/9/15.
 */
public interface MessageRepository extends PagingAndSortingRepository<Message, Integer> {
}
