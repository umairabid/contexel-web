<template>
  <section id="invoices-screen" class="dashboard-screen">
    <header class="dashboard-screen-header">
      <h1>Manage Invoices</h1>
    </header>
    <section class="dashboard-screen-section">
      <div class="writers-block content-block">
        <div class="content-block-head">
          <div class="content-block-title">Invoices</div>
          <div v-if="user.role == 'manager'" class="content-block-actions">
            <button @click="showModal = true" class="btn primary">
              Generate Invoice
              <i class="material-icons md-18">add_circle_outline</i>
            </button>
          </div>
        </div>
        <div class="content-block-body">
          <table class="table-bordered pure-table">
            <tr>
              <th>Name</th>
              <th>Period From</th>
              <th>Period To</th>
              <th>Download</th>
            </tr>
            <tr :key="invoice.id" v-for="invoice in invoices">
              <td>{{ invoice.writer_name }}</td>
              <td>{{ invoice.period_from | moment }}</td>
              <td>{{ invoice.period_to | moment }}</td>
              <td>
                <a :href="apiUrl + invoice.invoice_download_link" target="_blank">Download</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <app-modal title="Generate Invoice" @close="showModal = false" v-if="showModal">
      <generate-invoice @save="save"></generate-invoice>
    </app-modal>
  </section>
</template>

<script src="./Invoices.js"></script>
<style src="./Invoices.scss" lang="scss"></style>
