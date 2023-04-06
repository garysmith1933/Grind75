var mergeTwoLists = function(list1, list2) {
  //dummy node
  const head = new ListNode(null);
  let tail = head;
  
  let current1 = list1;
  let current2 = list2;

  while ( current1 && current2 ) {
    //set current position of list to whichever value is smaller
    if ( current1.val < current2.val ) {
      tail.next = current1;
      current1 = current1.next;
    }

    else {
      tail.next = current2;
      current2 = current2.next
    }

    //tail will just keep getting reassigned if you dont shift it
    tail = tail.next
  }

  // break out of the loop, one has nothing left, 
  // the rest of the list will be whats which ever one is not null
  if (!current1) {
    tail.next = current2;
  }

  else {
    tail.next = current1
  }

  //if you return head, its null. so has to be the one after.
  return head.next;

  //Time: O(min(N,M)
  //Space: O(1)
};