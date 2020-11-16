module.exports = function(app) {

    function getLink(type, hash) {
      const url = 'http://valorantify.com/' + type + '?token=' + hash
      return url
    }
  
    function sendEmail(email) {
      return app.service('mailer').create(email).then(function (result) {
        console.log('Sent email', result)
      }).catch(err => {
        console.log('Error sending email', err)
      })
    }
  
    return {
      notifier: function(type, user, notifierOptions) {
        let tokenLink
        let email
        switch (type) {
          case 'resendVerifySignup': //sending the user the verification email
            tokenLink = getLink('verify', user.verifyToken)
            email = {
               from: "signup.valorantify@gmail.com",
               to: user.email,
               subject: 'Verify Signup',
               html: tokenLink
            }
            return sendEmail(email)
            break
  
          case 'verifySignup': // confirming verification
            tokenLink = getLink('verify', user.verifyToken)
            email = {
               from: "signup.valorantify@gmail.com",
               to: user.email,
               subject: 'Confirm Signup',
               html: 'Thanks for verifying your email'
            }
            return sendEmail(email)
            break
  
          case 'sendResetPwd':
            tokenLink = getLink('reset', user.resetToken)
            email = {
              from: "signup.valorantify@gmail.com",
              to: user.email,
              subject: 'Valorantify Forget Password',
              html: tokenLink
           }
            return sendEmail(email)
            break
  
          case 'resetPwdLong':
            tokenLink = getLink('reset', user.resetToken)
            email = {}
            // return sendEmail(email)
            break
  
          case 'passwordChange':
            email = {}
            return sendEmail(email)
            break
  
          case 'identityChange':
            tokenLink = getLink('verifyChanges', user.verifyToken)
            email = {}
            return sendEmail(email)
            break
  
          default:
            break
        }
      }
    }
  }