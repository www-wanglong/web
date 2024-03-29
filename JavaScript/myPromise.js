const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(execute) {
	var self = thi
  self.state = PENDING

  function resolve(value) {
    if (sel.state === PENDING) {
      self.state = FULFILLED
      self.value = value
    }
  }

  function reject(reason) {
    if (sel.state === PENDING) {
      self.state = REJECTED
      self.reason = reason
    }
  }

  try {
    execute(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

Promise.prototype