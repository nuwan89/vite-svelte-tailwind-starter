<form>
  <div class="form-container">
    <div class="field-row">
      <label for="">Message Name</label>
      <input type="text" />
    </div>
    <div class="field-row">
      <label for="">Qty</label>
      <input type="text" />
    </div>
    <div class="action-row">
      <button>Clear</button>
      <button>Send</button>
    </div>
  </div>
</form>

<style lang="scss">
  .form-container {
    width: 35rem;
  }
  .field-row {
    display: flex;
    padding: 0.2em;
    
    label {
      width: 10rem;
      text-align: right;
      padding-right: 0.5em;
    }
}

.action-row {
    display: flex;
    padding: 0.2em;
    justify-content: flex-end;
    button { 
        width: 4rem;
        background-color: var(--primary-btn);
        color: var(--primary-btn-txt);
        margin-left: 0.6em;
        margin-top: 0.3em;
    }
  }

  input {
    flex: 1;
    background-color: var(--primary-light);
    border-width: 0.08rem;
    border-color: var(--primary);
  }
</style>
